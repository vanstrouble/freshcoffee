import Product from '../components/Product'
import axiosInstance from '../config/axios';
import useKiosk from '../hooks/useKiosk'
import useSWR from 'swr';

export default function Home() {

    const { actualCategory } = useKiosk();

    const fetcher = () => axiosInstance('api/products').then(data => data.data);
    // eslint-disable-next-line no-unused-vars
    const { data, error, isLoading } = useSWR('/api/products', fetcher, {
        refreshInterval: 1000
    });

    if (isLoading) return <p>Loading...</p>
    const products = data.data.filter(product => product.category_id === actualCategory.id);

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
