$(document).ready(function() {
            $('#colors').selectmenu({
                width:200,
                change: function(event, ui) {
                    if (ui.item.value === 'purple') {
                        $('.square').css('background-color','#800080'),
                            console.log('пурпурный');
                    } else if (ui.item.value === 'coral') {
                        $('.square').css('background-color','#FF7F50'),
                            console.log('кораловый');
                    } 
                    else if (ui.item.value === 'peachpuff') {
                        $('.square').css('background-color', '#FFDAB9');
                        console.log('персиковый');
                    } else if (ui.item.value === 'turquoise') {
                        $('.square').css('background-color', '#40E0D0');
                        console.log('бирюзовый');
                    } else if (ui.item.value === 'fuchsia') {
                        $('.square').css('background-color', '#FF00FF');
                        console.log('Фуксия');
                    }
                    
                } //change
            }); //selectmenu
        }); //ready