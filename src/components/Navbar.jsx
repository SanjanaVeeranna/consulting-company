import { Link } from "react-router-dom";


const Navbar = () => {
    return (
       <>
       <div className="nav-main-container">
        <p>JAMES CONSULTING</p>
       <div className="nav-links-container">

       <Link to="/about">About</Link>
       <Link to="/project">Projects</Link>
       <Link to="/services">Services</Link>
       <Link to="/about">Plans & Pricing</Link>
       <Link to="/about">Tools & Tips</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/login"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAxACsDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAYBBAUHAwL/xAAwEAACAQMBBgQEBwEAAAAAAAABAgMABBEFBhIhMUFRE2FxoSIyQlIUM2KBkdHh8P/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAGhEAAwEBAQEAAAAAAAAAAAAAAAECERIhQf/aAAwDAQACEQMRAD8Awc0ZqKK6jlJzRmr9lot9fKHhhIjP1ud0f7+1W5NltRRCy+C5x8qvx9xS6Q+WYuaM16XFvNaymO4jaNx0YV5UxBW5s1pK387T3C70ERxunkzdvSsOnvZdQNEhI5szE/yai3iKhazTmmjtoWllYRxoOJPIVQtdfsLucQxykOThd5cBvSq+1kUkmkZjBISQM+O2D/YpOs4pZ7qKOAEyMw3cdPOomU1ppVNPDoOpafDqNs0UoGfpbqp71zueJ4JnikGHRipHnXT6UtasoJNVndjgndzwP2iiH8C530WqbNkL9TFJZOcOp30z1HUf93pTr6ileGRZImKOpyGHMVrS1YZS8ejhqu08dpM0FtEJnXgzMcKD286ybXaP8NMZF0+0XPMxrusR61Raezu/iuY3gmPzSQgFWPcqcexqPC09OLXU8n6VhA9y1SpSKdNjvY6rbX1m1yjbip+YH4bnrSNqV6b2/muASA7fCPIcB7ConvAYTb20fgQEgsN7LOR9x6+nKqtEzgVWhRRRVkBRRRQAUUUUAf/Z"></img>Log In</Link>
       </div>
       </div>
       </> 
    );
};
export default Navbar;