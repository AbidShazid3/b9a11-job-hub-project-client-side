import 'animate.css';

const Blogs = () => {
    return (
        <div className="mt-10">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-blue-500 animate__animated animate__pulse animate__delay-3s animate__infinite">There are Two different types of Token</h2>
                <div className="md:flex lg:flex justify-evenly mt-5 gap-5">
                    <div className="card bg-base-100 shadow-xl flex-1 ">
                        <div className="text-center p-4">
                            <h2 className="text-2xl font-bold mb-2">Access Token</h2>
                            <p>An access token is a credential used by a client to access protected resources on behalf of a user. It is typically short-lived and grants specific permissions to access certain resources. Access tokens are commonly used in OAuth 2.0 and are included in the HTTP headers of requests to authenticated endpoints.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl flex-1">
                        <div className="text-center p-4">
                            <h2 className="text-2xl font-bold mb-2">Refresh Token</h2>
                            <p>A refresh token is a credential used to obtain a new access token after the current access token expires. Unlike access tokens, refresh tokens are long-lived and are used to maintain the user`s session without requiring them to reauthenticate frequently. Refresh tokens are securely stored by the client and are sent to the server to request a new access token when needed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 p-4 space-y-3'>
                <p><span className='text-xl font-semibold'>How they work:</span> When a user logs in or authorizes an application, they receive an access token and a refresh token. The access token is used to access protected resources, while the refresh token is stored securely by the client. When the access token expires, the client sends the refresh token to the server to obtain a new access token without requiring the user to log in again.</p>
                <p><span className='text-xl font-semibold'>Where to store them on the client side:</span> Access tokens should be stored in memory or in a secure storage mechanism such as HTTP-only cookies or browser storage (e.g., localStorage or sessionStorage). Refresh tokens should be stored securely, such as in HTTP-only cookies or secure storage mechanisms, to prevent unauthorized access.</p>
            </div>
            <div className='mt-5'>
                <div className="card bg-base-100 shadow-xl">
                    <h2 className='text-4xl font-bold p-4'>What is Express.js & Nest.js?</h2>
                    <div className="card-body">
                        <h2 className="card-title">Exploring Express.js</h2>
                        <p> Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building web and mobile applications, including routing, middleware support, template engines, and more. Express.js is widely used in the Node.js ecosystem and is known for its simplicity, flexibility, and performance. It is an unopinionated framework, meaning it gives developers the freedom to structure their applications as they see fit</p>
                        <h2 className="card-title">Exploring Nest.js</h2>
                        <p>Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built on top of Express.js and provides an additional layer of abstraction and structure to Node.js applications. Nest.js leverages TypeScript and follows architectural patterns such as MVC (Model-View-Controller) and dependency injection to create maintainable and testable codebases. It also provides built-in support for features such as GraphQL, WebSockets, microservices, and more. Nest.js is often favored for its modularity, extensibility, and developer experience.</p>
                    </div>
                </div>
                <div className='mt-5 p-4'>
                    <h2 className='text-xl'>How to install NestJS</h2>
                    <li>Create a new directory for your project and navigate into it:</li>
                    <div className='p-4'>
                        <p>mkdir express-example</p>
                        <p>cd express-example</p>
                    </div>
                    <li>Initialize a new Node.js project and install Express.js:</li>
                    <div className='p-4'>
                        <p>npm init -y</p>
                        <p>npm install express</p>
                    </div>
                    <li>Go to <a className='text-red-400' href="https://expressjs.com/en/starter/hello-world.html">express.com</a> and explore the code</li>
                </div>
            </div>
        </div>
    );
};

export default Blogs;