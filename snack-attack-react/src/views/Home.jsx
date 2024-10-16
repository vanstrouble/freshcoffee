import Product from '../components/Product'
import { products as data } from '../data/products'
import useKiosk from '../hooks/useKiosk'

export default function Home() {

    const { actualCategory } = useKiosk();

    const products = data.filter(product => product.category_id === actualCategory.id);

    return (
        <>
            <h1 className='text-4xl font-black'>{ actualCategory.name }</h1>
            <p className='text-2xl my-10'>
                Choose and customize your order below:
            </p>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {products.map((product) => (
                    <div key={product.image} className='max-w-xs mx-auto'>
                        <Product
                            product={product}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
