const carForm = document.getElementById('carForm');
    const carList = document.getElementById('carList');
    const cars = [];

    carForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const model = document.getElementById('model').value;
      const year = document.getElementById('year').value;
      const price = document.getElementById('price').value;
      const position = document.getElementById('position').value;

      const car = {
        name,
        model,
        year,
        price,
        position
      };

      cars.push(car);
      updateCarList();
      carForm.reset();
    });

    function updateCarList() {
      carList.innerHTML = cars.map(car => `
        <tr>
          <td>${car.name}</td>
          <td>${car.model}</td>
          <td>${car.year}</td>
          <td>${car.price}</td>
          <td>${car.position}</td>
        </tr>
      `).join('');
    }