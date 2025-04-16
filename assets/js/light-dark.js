

function myFunction() {
    const isChecked = document.getElementById('checkbox').checked;
    document.body.classList.toggle('dark-mode', isChecked);
  
    localStorage.setItem('theme', isChecked ? 'dark' : 'light');
  

    document.querySelectorAll('#checkbox').forEach(cb => cb.checked = isChecked);
  }

  window.onload = function () {
    const theme = localStorage.getItem('theme');
    const isDark = theme === 'dark';
  
    document.body.classList.toggle('dark-mode', isDark);
  
  
    document.querySelectorAll('#checkbox').forEach(cb => cb.checked = isDark);
  };
  