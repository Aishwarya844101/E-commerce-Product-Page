document.querySelector('.add-to-cart').addEventListener('click', function() {
    alert('Product added to cart!');
});

document.querySelector('.rating-select').addEventListener('change', function() {
    let rating = this.value;
    alert('You rated this product: ' + rating + ' Star' + (rating > 1 ? 's' : ''));
});