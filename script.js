document.getElementById('amazonBtn').addEventListener('click', function() {
    document.getElementById('amazonPortfolio').style.display = 'block';
    document.getElementById('softwarePortfolio').style.display = 'none';
  });
  
  document.getElementById('softwareBtn').addEventListener('click', function() {
    document.getElementById('amazonPortfolio').style.display = 'none';
    document.getElementById('softwarePortfolio').style.display = 'block';
  });