const Footer = () => {
    const githubusername = "MatheusReis48";
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>
                Desenvolvido por{''}
                <a href="https://github.com/MatheusReis48"
                target="_blank"
                rel="noreferrrer"
                className="text-blue-500 hover:text-blue-700">
                
                {githubusername}
                </a> {currentYear} </p> </footer>
    )
}
export default Footer