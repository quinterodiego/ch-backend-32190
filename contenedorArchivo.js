import fs from 'fs';

class Contenedor {
    constructor ( path ) {
        this.path = path;
    }

    save = async ( producto ) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const productos = JSON.parse( data );
            const id = productos.length + 1;
            const nuevoProducto = { ...producto, id };
            productos.push( nuevoProducto );
            await fs.promises.writeFile( this.path, JSON.stringify( productos, null, 2 ));
            console.log(`ID: ${id}`);
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso');
        }
    }

    getById = async ( id ) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const productos = JSON.parse( data );
            const productoBuscado = productos.filter( p => p.id == id);
            return productoBuscado;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    getAll = async () => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const productos = JSON.parse( data );
            return productos;
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    updateById = async (id, producto) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const productoUpdated = { id, ...producto };
            const productos = JSON.parse( data );
            const productosFiltrados = productos.filter(p => p.id != id);
            const nuevosProductos = [ ...productosFiltrados, productoUpdated ];
            nuevosProductos.sort(function(a, b) { 
                return a.id - b.id  ||  a.name.localeCompare(b.name);
            });
            await fs.promises.writeFile( this.path, JSON.stringify( nuevosProductos, null, 2 ) );
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    deleteById = async ( id ) => {
        try {
            const data = await fs.promises.readFile( this.path, 'utf-8' );
            const productos = JSON.parse( data );
            const nuevosProductos = productos.filter( p => p.id !== id);
            await fs.promises.writeFile( this.path, JSON.stringify(nuevosProductos, null, 2));
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
    
    deleteAll = async () => {
        try {
            await fs.promises.writeFile(this.path, '[]');
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
}

export default Contenedor;