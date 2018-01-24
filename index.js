//[
//  { "name": "PrintTitle", "value": "Test print title ทดสอบพิมพ์หัวเรื่อง" },
//  { "name": "Line feed", "value": "The following line will be feed to new line" },
//  { "name": "LineFeed" },
//  { "name": "Print line", "value": "Print solid line after this" },
//  { "name": "PrintLine" },
//  { "name": "Long value", "value": "Test printing long value for checking word wrapping" },
//  { "name": "ภาษาไทย", "value": "ทดสอบการตัดคำภาษาไทยสำหรับประโยคยาวๆ" },
//  { "name": "Double line", "value": "Print double line after this" },
//  { "name": "PrintDoubleLine" },
//  { "name": "PrintComment", "value": "Test comment name values and word wrapping" },
//  { "name": "PrintComment", "value": "ทดสอบการใส่หมายเหตุเป็นภาษาไทย" }

var Paper  = function () {

    this.listCommand = [];
    var obj = '';

    this.title = function (s) {
        var obj = {
            name: 'PrintTitle',
            value: s,
            
        };
        this.listCommand.push(obj);

        return this;
    },
        this.comment = function (s) {
            var obj = {
                name: 'PrintComment',
                value: s
            };
            this.listCommand.push(obj);

            return this;
        },

        this.keyValue = function (key, value) {
            var obj = {
                name: key,
                value: value
            };
            this.listCommand.push(obj);

            return this;
        },

        this.textLine = function (text) {

            var obj = {
                name: 'PrintTextLine',
                value: text
            };
            this.listCommand.push(obj);

            return this;

        },


        //line + feed
        this.lineFeed = function () {
            var obj = {
                name: 'LineFeed',
                value: true
            };
            this.listCommand.push(obj);
            return this;

        },
        this.drawLine = function (s) {
            var obj = {
                name: 'PrintLine',
                value: true
            };
            this.listCommand.push(obj);
            return this;
        },
        this.draw2Line = function (s) {
            var obj = {
                name: 'PrintDoubleLine',
                value: true
            };
            this.listCommand.push(obj);
            return this;
        },

        this.movePosition = function (s) {
            var obj = {
                name: 'MOVE_POSITION',
                value: s
            };
            this.listCommand.push(obj);
            return this;
        }

        this.setFontSize = function (s) {
            var obj = {
                name: 'SET_FONT_SIZE',
                value: s
            };
            this.listCommand.push(obj);
            return this;
        }

        this.setFontDefault = function (s) {
            var obj = {
                name: 'SET_FONT_DEFAULT',
                value: s
            };
            this.listCommand.push(obj);
            return this;
        }

        this.endSection = function () {

            this.lineFeed();
            this.drawLine();
            this.lineFeed();


        },

        this.gen = function () {
            return this.listCommand;
        };


    return this;

    //****************************

};

 
module.exports = Paper ;