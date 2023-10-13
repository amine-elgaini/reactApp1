import Rating from "./rating";

export default function DisplayProduct({product}) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.id}
            </th>
            <td className="px-6 py-4">{product.title}</td>
            <td className="px-6 py-4">{product.price}</td>
            <td className="px-6 py-4">{product.description.slice(0, 50)}</td>
            <td className="px-6 py-4">{product.category}</td>
            <td className="px-6 py-4"><img width={80} src={product.image} alt="" /></td>
            <td className="px-6 py-4"> <Rating rating={product.rating}  /></td>
        </tr>
    )
}