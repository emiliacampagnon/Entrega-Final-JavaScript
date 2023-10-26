
const productosViu = [
    {
        id: 0,
        categoria: 'Bikinis',
        modelo: 'Triangulito',
        estampado: 'Aurora',
        thumbnail: './Imagenes/aurora.png',
        precio: 15999,
    },
    {
        id: 1,
        categoria: 'Bikinis',
        modelo: 'Triangulito',
        estampado: 'Federica',
        thumbnail: './Imagenes/federica.png',
        precio: 15999,
    },
    {
        id: 2,
        categoria: 'Bikinis',
        modelo: 'Triangulito',
        estampado: 'Olivia',
        thumbnail: './Imagenes/olivia.png',
        precio: 15999,
    },
    {
        id: 3,
        categoria: 'Fitness',
        modelo: 'calza corta',
        estampado: 'Andrómeda',
        thumbnail: './Imagenes/andromeda.png',
        precio: 12999,
    },
    {
        id: 4,
        categoria: 'Fitness',
        modelo: 'Calza Larga',
        estampado: 'Libra',
        thumbnail: './Imagenes/libra.png',
        precio: 15999,
    },
    {
        id: 5,
        categoria: 'Urban',
        modelo: 'Hoodie',
        estampado: 'xx Black',
        thumbnail: './Imagenes/xx.JPEG',
        precio: 16999,
    },
]; 



const Card = (props) => {

    let { categoria, modelo, estampado, thumbnail, precio, id } = props;
    let div = document.createElement('div');
    div.setAttribute('class', 'card-content');
    div.innerHTML =
        `
        <img src=${producto.thumbnail}>
        <div class="card-body">
        <p><span>${producto.categoria}</span> </p> 
        <p><span>${producto.modelo}</span></p>
        <h2> ${producto.estampado}</h2>
        <p>Dueño:${producto.precio}</p>
        <a data-id=${producto.id} class="card-link">Seleccionar Producto</a>
      </div>
    `;
    return div;
}
const CardContainer = (props) => {
    let { productos } = props;
    let section = document.createElement('section');
    section.setAttribute('class', 'card-container')
    productos.forEach(producto => {
        const card = Card(producto);
        section.append(card);
    });
    return section;
}

console.log(productosViu)

const App = () => {
    let appRoot = document.querySelector('#root');
    appRoot.append(CardContainer({productos : productosViu}))}

App();

