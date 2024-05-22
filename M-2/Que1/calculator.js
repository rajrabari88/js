function calculateSubtotal(quantity, price) {
    return (quantity * price).toFixed(2);
  }
  
  function updateSubtotals() {
    const quantity1 = parseFloat(document.getElementById('quantity1').value);
    const price1 = parseFloat(document.getElementById('price1').textContent);
    const subtotal1 = calculateSubtotal(quantity1, price1);
    document.getElementById('subtotal1').textContent = subtotal1;
  
    const quantity2 = parseFloat(document.getElementById('quantity2').value);
    const price2 = parseFloat(document.getElementById('price2').textContent);
    const subtotal2 = calculateSubtotal(quantity2, price2);
    document.getElementById('subtotal2').textContent = subtotal2;
  
    const totalPrice = parseFloat(document.getElementById('subtotal1').textContent) + parseFloat(document.getElementById('subtotal2').textContent);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
  }
  
  function removeProduct(productId) {
    
    console.log(`Product ${productId} removed`);
     
    updateSubtotals();
  }
  
  
  updateSubtotals();
  
  
  document.getElementById('quantity1').addEventListener('change', updateSubtotals);
  document.getElementById('quantity2').addEventListener('change', updateSubtotals);
  