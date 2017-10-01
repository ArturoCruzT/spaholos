(function(root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD support.
        define([], factory);
    } else if (typeof exports === 'object') {
        // NodeJS support.
        module.exports = new(factory())();
    } else {
        // Browser global support.
        root.Lang = new(factory())();
    }

}(this, function() {
    'use strict';

    // Default options //

    var defaults = {
        defaultLocale: 'en' /** The default locale if not set. */
    };

    // Constructor //

    var Lang = function(options) {
        options = options || {};
        this.defaultLocale = options.defaultLocale || defaults.defaultLocale;
    };

    // Methods //

    /**
     * Set messages source.
     *
     * @param messages {object} The messages source.
     *
     * @return void
     */
    Lang.prototype.setMessages = function(messages) {
        this.messages = messages;
    };

    /**
     * Returns a translation message.
     * Il no locale is given, the current locale will be used.
     *
     * @param key {string} The key of the message.
     * @param replacements {object} The replacements to be done in the message.
     * @param locale {locale} The locale to be used.
     *
     * @return {string} The translation message. If not found the default locale will be tried and eventually the given key will be returned.
     */
    Lang.prototype.get = function(key, replacements, locale) {
        if (!locale) {
            locale = this.getLocale();
        }

        // Check if the key exists in the required locale. If not found, try the default locale

        if (!this.has(key, locale)) {

            if(locale === this.defaultLocale)
                return key;

            locale = this.defaultLocale;

            if (!this.has(key, locale))
                return key;
        }

        var message = this._getMessage(key, locale);
        if (message === null) {
            return key;
        }

        if (replacements) {
            message = this._applyReplacements(message, replacements);
        }

        return message;
    };

    /**
     * Returns true if the key is defined on the messages source.
     *
     * @param key {string} The key of the message.
     * @param locale {string} The locale will be used.
     *
     * @return {boolean} true if the given key is defined on the messages source, otherwise false.
     */
    Lang.prototype.has = function(key, locale) {
        if (!locale) {
            locale = this.getLocale();
        }
        
        if (typeof key !== 'string' || !this.messages) {
            return false;
        }
        return this._getMessage(key, locale) !== null;
    };

    /**
     * Gets the plural or singular form of the message specified based on an integer value.
     *
     * @param key {string} The key of the message.
     * @param count {integer} The number of elements.
     * @param replacements {object} The replacements to be done in the message.
     *
     * @return {string} The translation message according to an integer value.
     */
    Lang.prototype.choice = function(key, count, replacements) {
        // Set default values for parameters replace and locale
        replacements = typeof replacements !== 'undefined' ? replacements : {};

        // The count must be replaced if found in the message
        replacements['count'] = count;

        // Message to get the plural or singular
        var message = this.get(key, replacements);

        // Check if message is not null or undefined
        if (message === null || message === undefined) {
            return message;
        }

        // Separate the plural from the singular, if any
        var messageParts = message.split('|');

        // Get the explicit rules, If any
        var explicitRules = [];
        var regex = /^(\[|\{|\(|\]|\)).*(\[|\(|\]|\)|\})\s/;

        for (var i = 0; i < messageParts.length; i++) {
            messageParts[i] = messageParts[i].trim();

            if (regex.test(messageParts[i])) {
                var messageSpaceSplit = messageParts[i].split(/\s/);
                explicitRules.push(messageSpaceSplit.shift());
                messageParts[i] = messageSpaceSplit.join(' ');
            }
        }

        // Check if there's only one message
        if (messageParts.length === 1) {
            // Nothing to do here
            return message;
        }

        // Check the explicit rules
        for (var i = 0; i < explicitRules.length; i++) {
            if (this._testInterval(count, explicitRules[i])) {
                return messageParts[i];
            }
        }

        var pluralForm = this._getPluralForm(count);

        return messageParts[pluralForm];
    };

    /**
     * Set the current locale.
     *
     * @param locale {string} The locale to set.
     *
     * @return void
     */
    Lang.prototype.setLocale = function(locale) {
        this.locale = locale;
    };

    /**
     * Get the current locale.
     *
     * @return {string} The current locale.
     */
    Lang.prototype.getLocale = function() {
        return this.locale || this.defaultLocale;
    };

    /**
     * Parse a message key into components.
     *
     * @param key {string} The message key to parse.
     * @param locale {string} The locale to be used.
     *
     * @return {object} A key object with source and entries properties.
     */
    Lang.prototype._parseKey = function(key, locale) {
        if (typeof key !== 'string') {
            return null;
        }
        var segments = key.split('.');
        return {
            source: locale + '.' + segments[0].replace('/', '.'),
            entries: segments.slice(1)
        };
    };

    /**
     * Returns a translation message. This methods assumes the key exists on input locale.
     *
     * @param key {string} The key of the message.
     * @param locale {string} The locale to be used
     *
     * @return {string} The translation message for the given key.
     */
    Lang.prototype._getMessage = function(key, locale) {

        key = this._parseKey(key, locale);

        // Ensure message source exists.
        if (this.messages[key.source] === undefined) {
            return null;
        }

        // Get message text.
        var message = this.messages[key.source];
        while (key.entries.length && (message = message[key.entries.shift()]));

        if (typeof message !== 'string' && typeof message !== 'object') {
            return null;
        }

        return message;
    };

    /**
     * Apply replacements to a string message containing placeholders.
     *
     * @param message {string} The text message.
     * @param replacements {object} The replacements to be done in the message.
     *
     * @return {string} The string message with replacements applied.
     */
    Lang.prototype._applyReplacements = function(message, replacements) {
        for (var replace in replacements) {
            message = message.split(':' + replace).join(replacements[replace]);
        }
        return message;
    };

    /**
     * Checks if the given `count` is within the interval defined by the {string} `interval`
     *
     * @param  count {int}  The amount of items.
     * @param  interval {string}    The interval to be compared with the count.
     * @return {boolean}    Returns true if count is within interval; false otherwise.
     */
    Lang.prototype._testInterval = function(count, interval) {
        /**
         * From the Symfony\Component\Translation\Interval Docs
         *
         * Tests if a given number belongs to a given math interval.
         * An interval can represent a finite set of numbers: {1,2,3,4}
         * An interval can represent numbers between two numbers: [1, +Inf] ]-1,2[
         * The left delimiter can be [ (inclusive) or ] (exclusive).
         * The right delimiter can be [ (exclusive) or ] (inclusive).
         * Beside numbers, you can use -Inf and +Inf for the infinite.
         */
        
        var numbers = this._parseNumbersFromInterval(interval);
        
        var types = {
            'setOfNumbers' : /^\{.*\}$/,
            'bothExclusive': /^(\(|\]|\)).*(\)|\[|\()$/,
            'bothInclusive': /^\[.*\]$/,
            'leftInclusive': /^\[.*(\)|\[|\()$/,
            'rightInclusive': /^(\(|\]|\)).*\]$/
        };

        if (interval.match(types.setOfNumbers)) {
            return numbers.indexOf(count) != -1;
        }

        if (interval.match(types.bothInclusive)) {
            return count >= numbers[0] && count <= numbers[1];
        }

        if (interval.match(types.bothExclusive)) {
            return count > numbers[0] && count < numbers[1];
        }

        if (interval.match(types.rightInclusive)) {
            return count > numbers[0] && count <= numbers[1];
        }

        if (interval.match(types.leftInclusive)) {
            return count >= numbers[0] && count < numbers[1];
        }
    };

    /**
     * Parse a given string (number, +Inf, -Inf, Inf) to Number.
     *
     * @param  {String} str 
     * @return {Number}     
     */
    Lang.prototype._parseNumber = function (str){
        str = str.replace(/Inf\s*?$/i, 'Infinity');

        return Number(str);
    };

    /**
     * Parse an interval to array.
     * 
     * @param  {String} interval
     * @return {Array} 
     */
    Lang.prototype._parseNumbersFromInterval = function (interval) {
        var braces = /\[|\]|\{|\}|\(|\)/g;
        var numbers = interval.replace(braces, '').split(/,\s?/);
        var newNumbers = [];
        
        for (var i in numbers) {
            newNumbers.push(this._parseNumber(numbers[i]));
        }

        return newNumbers;
    };

    /**
     * Returns the plural position to use for the given locale and number.
     *
     * The plural rules are derived from code of the Zend Framework (2010-09-25),
     * which is subject to the new BSD license (http://framework.zend.com/license/new-bsd).
     * Copyright (c) 2005-2010 Zend Technologies USA Inc. (http://www.zend.com)
     *
     * @param {Number} count
     * @return {Number}
     */
    Lang.prototype._getPluralForm = function (count) {
        
        // If a full locale is found (i.e. en_US), parse the 2-letter lang code from before the underscore
        var lang = (this.locale.indexOf('_') == 2) ? this.locale.substr(0, 2) : this.locale;

        switch (lang) {
            case 'az':
            case 'bo':
            case 'dz':
            case 'id':
            case 'ja':
            case 'jv':
            case 'ka':
            case 'km':
            case 'kn':
            case 'ko':
            case 'ms':
            case 'th':
            case 'tr':
            case 'vi':
            case 'zh':
                return 0;

            case 'af':
            case 'bn':
            case 'bg':
            case 'ca':
            case 'da':
            case 'de':
            case 'el':
            case 'en':
            case 'eo':
            case 'es':
            case 'et':
            case 'eu':
            case 'fa':
            case 'fi':
            case 'fo':
            case 'fur':
            case 'fy':
            case 'gl':
            case 'gu':
            case 'ha':
            case 'he':
            case 'hu':
            case 'is':
            case 'it':
            case 'ku':
            case 'lb':
            case 'ml':
            case 'mn':
            case 'mr':
            case 'nah':
            case 'nb':
            case 'ne':
            case 'nl':
            case 'nn':
            case 'no':
            case 'om':
            case 'or':
            case 'pa':
            case 'pap':
            case 'ps':
            case 'pt':
            case 'so':
            case 'sq':
            case 'sv':
            case 'sw':
            case 'ta':
            case 'te':
            case 'tk':
            case 'ur':
            case 'zu':
                return (count == 1) ? 0 : 1;

            case 'am':
            case 'bh':
            case 'fil':
            case 'fr':
            case 'gun':
            case 'hi':
            case 'hy':
            case 'ln':
            case 'mg':
            case 'nso':
            case 'xbr':
            case 'ti':
            case 'wa':
                return ((count == 0) || (count == 1)) ? 0 : 1;

            case 'be':
            case 'bs':
            case 'hr':
            case 'ru':
            case 'sr':
            case 'uk':
                return ((count % 10 == 1) && (count % 100 != 11)) ? 0 : (((count % 10 >= 2) && (count % 10 <= 4) && ((count % 100 < 10) || (count % 100 >= 20))) ? 1 : 2);

            case 'cs':
            case 'sk':
                return (count == 1) ? 0 : (((count >= 2) && (count <= 4)) ? 1 : 2);

            case 'ga':
                return (count == 1) ? 0 : ((count == 2) ? 1 : 2);

            case 'lt':
                return ((count % 10 == 1) && (count % 100 != 11)) ? 0 : (((count % 10 >= 2) && ((count % 100 < 10) || (count % 100 >= 20))) ? 1 : 2);

            case 'sl':
                return (count % 100 == 1) ? 0 : ((count % 100 == 2) ? 1 : (((count % 100 == 3) || (count % 100 == 4)) ? 2 : 3));

            case 'mk':
                return (count % 10 == 1) ? 0 : 1;

            case 'mt':
                return (count == 1) ? 0 : (((count == 0) || ((count % 100 > 1) && (count % 100 < 11))) ? 1 : (((count % 100 > 10) && (count % 100 < 20)) ? 2 : 3));

            case 'lv':
                return (count == 0) ? 0 : (((count % 10 == 1) && (count % 100 != 11)) ? 1 : 2);

            case 'pl':
                return (count == 1) ? 0 : (((count % 10 >= 2) && (count % 10 <= 4) && ((count % 100 < 12) || (count % 100 > 14))) ? 1 : 2);

            case 'cy':
                return (count == 1) ? 0 : ((count == 2) ? 1 : (((count == 8) || (count == 11)) ? 2 : 3));

            case 'ro':
                return (count == 1) ? 0 : (((count == 0) || ((count % 100 > 0) && (count % 100 < 20))) ? 1 : 2);

            case 'ar':
                return (count == 0) ? 0 : ((count == 1) ? 1 : ((count == 2) ? 2 : (((count % 100 >= 3) && (count % 100 <= 10)) ? 3 : (((count % 100 >= 11) && (count % 100 <= 99)) ? 4 : 5))));

            default:
                return 0;
        }
    };

    return Lang;

}));


(function(root) {
    Lang.setMessages({"en.auth":{"failed":"These credentials do not match our records.","throttle":"Too many login attempts. Please try again in :seconds seconds."},"en.pagination":{"previous":"&laquo; Previous","next":"Next &raquo;"},"en.passwords":{"password":"Passwords must be at least six characters and match the confirmation.","reset":"Your password has been reset!","sent":"We have e-mailed your password reset link!","token":"This password reset token is invalid.","user":"We can't find a user with that e-mail address."},"en.validation":{"accepted":"The :attribute must be accepted.","active_url":"The :attribute is not a valid URL.","after":"The :attribute must be a date after :date.","alpha":"The :attribute may only contain letters.","alpha_dash":"The :attribute may only contain letters, numbers, and dashes.","alpha_num":"The :attribute may only contain letters and numbers.","array":"The :attribute must be an array.","before":"The :attribute must be a date before :date.","between":{"numeric":"The :attribute must be between :min and :max.","file":"The :attribute must be between :min and :max kilobytes.","string":"The :attribute must be between :min and :max characters.","array":"The :attribute must have between :min and :max items."},"boolean":"The :attribute field must be true or false.","confirmed":"The :attribute confirmation does not match.","date":"The :attribute is not a valid date.","date_format":"The :attribute does not match the format :format.","different":"The :attribute and :other must be different.","digits":"The :attribute must be :digits digits.","digits_between":"The :attribute must be between :min and :max digits.","distinct":"The :attribute field has a duplicate value.","email":"The :attribute must be a valid email address.","exists":"The selected :attribute is invalid.","filled":"The :attribute field is required.","image":"The :attribute must be an image.","in":"The selected :attribute is invalid.","in_array":"The :attribute field does not exist in :other.","integer":"The :attribute must be an integer.","ip":"The :attribute must be a valid IP address.","json":"The :attribute must be a valid JSON string.","max":{"numeric":"The :attribute may not be greater than :max.","file":"The :attribute may not be greater than :max kilobytes.","string":"The :attribute may not be greater than :max characters.","array":"The :attribute may not have more than :max items."},"mimes":"The :attribute must be a file of type: :values.","min":{"numeric":"The :attribute must be at least :min.","file":"The :attribute must be at least :min kilobytes.","string":"The :attribute must be at least :min characters.","array":"The :attribute must have at least :min items."},"not_in":"The selected :attribute is invalid.","numeric":"The :attribute must be a number.","present":"The :attribute field must be present.","regex":"The :attribute format is invalid.","required":"The :attribute field is required.","required_if":"The :attribute field is required when :other is :value.","required_unless":"The :attribute field is required unless :other is in :values.","required_with":"The :attribute field is required when :values is present.","required_with_all":"The :attribute field is required when :values is present.","required_without":"The :attribute field is required when :values is not present.","required_without_all":"The :attribute field is required when none of :values are present.","same":"The :attribute and :other must match.","size":{"numeric":"The :attribute must be :size.","file":"The :attribute must be :size kilobytes.","string":"The :attribute must be :size characters.","array":"The :attribute must contain :size items."},"string":"The :attribute must be a string.","timezone":"The :attribute must be a valid zone.","unique":"The :attribute has already been taken.","url":"The :attribute format is invalid.","custom":{"attribute-name":{"rule-name":"custom-message"}},"attributes":[]}});
})(window);
