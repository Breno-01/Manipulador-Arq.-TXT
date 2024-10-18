document.getElementById('salvarBt').addEventListener('click', function() {
    const textArea = document.getElementById('textArea');
    const texto = textArea.value;
    
    const blob = new Blob([texto], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'meuarquivo.txt';
    link.click();
});

document.getElementById('uploadBt').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('textArea').value = e.target.result;
    };

    if (file) {
        reader.readAsText(file);
    }
});
