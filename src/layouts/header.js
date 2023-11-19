import '../style.css'

export const Header = () => {
    return (
        <div className="header">
            <div className="top-header">
                <div className="top-header-left">
                    <ul>
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Specials</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="top-header-right">
                    <ul>
                        <li><a href="#">CURRENCY:</a></li>
                        <li>
                            <select>
                                <option>RU</option>
                            </select>
                        </li>
                    </ul>
                </div>
                <div className="clear"> </div>
            </div>
            <div className="clear"> </div>
            <div className="sub-header">
                <div className="logo">
                    <a href="/"><img src="/images/logo.png" title="logo" /></a>
                </div>

                <div className="clear"> </div>
            </div>
            <div className="clear"> </div>
            <div className="top-nav">
                <ul>
                    <li><a href="/category/1">Свет</a></li>
                    <li><a href="/category/2">Диски</a></li>
                    <li><a href="/category/3">Бамперы</a></li>
                    <li><a href="/category/4">Аудиосистемы</a></li>
                    <li><a href="/category/5">Truck bumpers</a></li>
                    <li><a href="/contact">Feedback</a></li>
                    <div className="clear"> </div>
                </ul>
            </div>
        </div>
    )
} 