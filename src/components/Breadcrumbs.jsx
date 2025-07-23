import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ productName }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="text-sm text-gray-500 py-4 flex items-center flex-wrap">
            <Link to="/" className="hover:underline text-gray-600">Home</Link>

            {location.pathname.startsWith('/products/') && (
                <>
                    <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />
                    <Link to="/alljewellary" className="hover:underline text-gray-600">All Jewellery</Link>
                </>
            )}

            {pathnames.length > 0 && (
                <>
                    <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />
                    <span className="text-gray-800 font-medium">
                        {productName || decodeURIComponent(pathnames[pathnames.length - 1])}
                    </span>
                </>
            )}
        </nav>
    );
};

export default Breadcrumb;
