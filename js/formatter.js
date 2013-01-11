var Formatter = {
    //Formatter.generate('code-html', 'html', 'HTML', './templates/1-starting/embertut.html');
    generate: function(id_dom, type, title, template, templateExtra) {
        $.ajax({
            async: false,
            url: template,
            dataType: 'html',
            context: $('#' + id_dom)
        }).done(function(r) {
            this.html(r);
        });
        if (templateExtra) {
            $.ajax({
                async: false,
                url: templateExtra,
                dataType: 'html',
                context: $('#' + id_dom + '-extra')
            }).done(function(r) {
                this.html(r);
            });
        }
        var i, code, codeFormatted, codeLength, codeLines;
        code = $('#' + id_dom).html();
        if (templateExtra) {
            codeExtra = $('#' + id_dom + '-extra').html();
        }
        codeLength = code.split('\n').length;
        codeLines = '';

        if(type === 'javascript') {
            codeFormatted = '&lt;script type="text/javascript"&gt;\n' + code + '\n&lt;/script&gt;';
            codeLength += 2;
        } else {
            codeFormatted = code;
        }
        for(i = 1; i <= codeLength; i++) {
            codeLines += i + '\n';
        }
        codeFormatted = codeFormatted.replace(/</g, '&lt;');
        codeFormatted = codeFormatted.replace(/>/g, '&gt;');
        $('#' + id_dom + '-line-number').html('<pre>' + codeLines + '</pre>');
        $('#' + id_dom + '-formatted-code').html('<pre>' + codeFormatted + '</pre>');
        if(type === 'javascript') {
            code = code.replace('&lt;', '<');
            code = code.replace('&gt;', '>');
            eval(code);
        } else {
            if (templateExtra) {
                $('#' + id_dom + '-render').html(codeExtra);
            } else {
                $('#' + id_dom + '-render').html(code);
            }
        }
        $('#' + id_dom + '-title').html(title);

    }
}