document.addEventListener("DOMContentLoaded", function () {
    var acordeonItems = document.querySelectorAll('.acordeonItemLi input[type="checkbox"]');

    acordeonItems.forEach(function (item) {
        var siblingParagraphs = item.parentNode.querySelectorAll('p');
        
        // Cierra los párrafos al inicio
        siblingParagraphs.forEach(function (paragraph) {
            paragraph.style.maxHeight = '0';
            paragraph.style.opacity = '0';
            paragraph.style.transform = 'translateX(-50%)';
            paragraph.style.display = 'none';
        });

        item.addEventListener('change', function () {
            var checked = this.checked;

            siblingParagraphs.forEach(function (paragraph) {
                if (checked) {
                    paragraph.style.display = 'block';
                    setTimeout(function () {
                        paragraph.style.maxHeight = '800px';
                        paragraph.style.opacity = '1';
                        paragraph.style.transform = 'translate(0, 0)';
                    }, 10);
                } else {
                    paragraph.style.maxHeight = '0';
                    paragraph.style.opacity = '0';
                    paragraph.style.transform = 'translateX(-50%)';
                    setTimeout(function () {
                        paragraph.style.display = 'none';
                    }, 250);
                }
            });
        });
    });
});