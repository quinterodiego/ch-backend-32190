const productos = [
    {
        "id": 1,
        "title": "K10 Hot-Swappable RBG Backlight Gateron G Pro Mechanical BROWN SWITCH",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/k10-h31-2d569a9d6f039918ae16407066179013-480-0.jpeg",
        "description": "KEYCHRON K10 Diseñado para maximizar su productividad con el diseño de tamaño completo más popular con teclado numérico. La opción intercambiable en caliente...",
        "price": 39700
    },
    {
        "id": 2,
        "title": "K2 V2 Hot Swappable RGB Backlight Gateron G Pro Mechanical BROWN Switch",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychron-k2-hot-swappable-wireless-mechanical-keyboard-for-mac-windows-gateron-switch-brown-with-type-c-rgb-white-backlight_1800x18001-81f48d6579b89e40bf16565142664377-480-0.jpg",
        "description": "CONOCÉ EL K2 VERSIÓN 2 HOT SWAPPABLE K2 es un teclado súper táctil inalámbrico o con cable que le brinda todas las teclas y funciones que necesita mien...",
        "price": 37800
    },
    {
        "id": 3,
        "title": "K3 Non-Backlight Ultra-Slim Brown Switch",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychronk3-non-backlit-ultra-slimwirelessmechanicalkeyboard-low-profile-gateron-brown_1800x18001-b044b4c1532166372216581547874923-480-0.jpg",
        "description": "El teclado sin retroiluminación K3 ha incluido teclas para los sistemas operativos Windows y Mac. UN TECLADO MECÁNICO INALÁMBRICO ULTRA DELGADO Incorporar lo...",
        "price": 33300
    },
    {
        "id": 4,
        "title": "Keychron K2 RGB Backlight Gateron G Pro Brown Switch",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychron-k2-wireless-mechanical-keyboard-for-mac-windows-ios-gateron-switch-brown-with-type-c-rgb-white-backlight_53059406-af50-40d8-8566-c3b5f1e85a62_1800x18001-ba8a513dbb9543f76b16506566912246-480-0.jpeg",
        "description": "CONOCÉ EL K2 VERSIÓN 2      K2 es un teclado súper táctil inalámbrico o con cable que le brinda todas las teclas y funciones que necesita mientras lo mantien...",
        "price": 33388
    },
    {
        "id": 5,
        "title": "Q2 Fully Assembled Gateron G Pro Brown Switch Carbon Black",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychron-q2-custom-mechanical-keyboard-fully-assembled-version-black-brown_00bf75b2-fd0d-4fbc-97e5-55179df82eff_1800x18001-82e7f34881f6f330e416567035461279-480-0.jpg",
        "description": "Keychron Q2 El Q2 &amp;#8203;&amp;#8203;es un teclado mecánico totalmente personalizable con un diseño compacto que lleva su experiencia de escritura al siguiente ni...",
        "price": 60888
    },
    {
        "id": 6,
        "title": "Q3 Fully Assembled Gateron G Pro Red Switch Silver Grey",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychron-q3-qmkvia-mechanical-keyboard-fully-assembled-grey-red_1800x18001-7e1aa93ebd406b8f7f16569392380413-480-0.jpg",
        "description": "  Keychron Q3 El Q3 es un teclado mecánico totalmente personalizable para llevar tu experiencia de escritura a lo más alto. Con el diseño clásico sin teclado...",
        "price": 63188
    },
    {
        "id": 7,
        "title": "Q5 Fully Assembled Navy Blue Gateron G Pro Brown Switch",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/q5-j3-keychron-q5-qmk-via-custom-mechanical-keyboard-96-percent-compact-full-size-layout-full-aluminum-frame-for-mac-windows-linux-fully-assembled-blue-gateron-g-pro-switch-brown_faa186bd-a4c6-4df9-b711-48e16f3ebebfed23ad16578985575923-480-0.jpg",
        "description": "KEYCHRON Q5 Estableciendo el mejor ejemplo para el uso eficiente del espacio, el Q5 tiene un diseño compacto del 96% mientras conserva todas las funciones es...",
        "price": 68688
    },
    {
        "id": 8,
        "title": "K1 V5 Low Profile RGB Backlight Aluminum Body Low Profile Mechanical BROWN Switch",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/11-2bb757d8e884f3cac016426102310457-480-0.jpeg",
        "description": "Este producto será entregado después del  23 de junio. El K1 ha incluido teclas para los sistemas operativos Windows y Mac.   NOVEDADES EN K1V5: Se agregó el...",
        "price": 33888
    },
    {
        "id": 9,
        "title": "K10 RGB Backlight Aluminum Frame Gateron G Pro Mechanical Brown Switch",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/k10-c31-a863fece90f9904c9916506552550213-480-0.jpg",
        "description": "KEYCHRON K10 Diseñado para maximizar su productividad con el diseño de tamaño completo más popular con teclado numérico. La opción intercambiable en caliente...",
        "price": 37188
    },
    {
        "id": 10,
        "title": "K2 NO Backlight Red Switch",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychron-k2-non-backlight-version-mechanical-keyboard-red-switch-for-mac-windows_1800x18001-1c41f7137475c8116416486491880799-480-0.jpeg",
        "description": "LA MEJOR COMBINACIÓN DE TECLADO DE TAMAÑO COMPLETO Y TENKEYLESS K2 es un teclado inalámbrico o con cable súper táctil que le brinda todas las teclas y funcio...",
        "price": 25888
    },
    {
        "id": 11,
        "title": "K2 RGB Backlight Aluminum Frame Gateron G Pro Brown Switch",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/k2-c31-573adeb6117c1e9fa916506566335895-480-0.jpg",
        "description": "CONOCÉ EL K2 VERSIÓN 2   NOVEDADES DE K2v2 Bluetooth 5.1 Marco inferior inclinado. Luz indicadora de bloqueo de mayúsculas dedicada agregada   LA MEJOR COMBI...",
        "price": 34350
    },
    {
        "id": 12,
        "title": "K3 Low Profile RGB Backlight Hot-Swappable Keychron Optical Brown Switch",
        "thumbnail": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/652/371/products/keychron-k3-ultra_slim-hot_swappable-wireless-mechanical-keyboard-mac-windows-ios-android-75percent-layout-white-backlight-aluminum-frame-low-profile-keychron-optical-switch-brown_1800x18001-02c4746f7da3797fdd16523659890465-480-0.png",
        "description": "UN TECLADO MECÁNICO INALÁMBRICO ULTRA DELGADO Incorpora los primeros interruptores ópticos de bajo perfil intercambiables en caliente del mundo para personal...",
        "price": 34388
    }
]

class Contenedor {
    constructor ( ) {
        this.products = productos;
    }

    save = async ( producto ) => {
        try {
            const id = this.products.length + 1;
            const nuevoProducto = { ...producto, id };
            this.products.push( nuevoProducto );
            console.log(`ID: ${id}`);
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en el proceso');
        }
    }

    getById = async ( id ) => {
        try {
            const productoBuscado = this.products.filter( p => p.id == id);
            return productoBuscado;
        }
        catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    getAll = async () => {
        try {
            return this.products;
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    updateById = async (id, producto) => {
        try {
            const productoUpdated = { id, ...producto };
            const productIndex = this.products.findIndex(p => p.id === id);
            this.products.splice(productIndex, 1);
            this.products.push(productoUpdated);
            this.products.sort(function(a, b) { 
                return a.id - b.id;
            });
            console.log(productoUpdated)
        } catch (error) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }

    deleteById = async ( id ) => {
        try {
            const productIndex = this.products.findIndex(p => p.id === id);
            this.products.splice(productIndex, 1);
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
    
    deleteAll = async () => {
        try {
            this.products.length = 0;
        } catch ( error ) {
            console.error( error );
            console.log('Hubo un error en la ejecución');
        }
    }
}

export default Contenedor;