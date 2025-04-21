import'./Portfolio.css'
import Project from '../../components/Project'

export default function Portfolio() {
    const projects = [
        {
            name: 'Weather Dashboard',
            url: '',
            gitHub: 'https://github.com/tlesner/Challenge9-WeatherDashboard',
            projClass: 'weather-dashboard',
            description: 'This application uses the Open Weather APi to create a dynamic weather application in a browser.'
        },
        {
            name: 'Employee Tracker',
            url: '',
            gitHub: 'https://github.com/tlesner/Challenge10-EmployeeTracker',
            projClass: 'employee-tracker',
            description: 'This project is built as a CLI application that manages employees for a company by adding, removing, and updating employees and their roles and departments. It utilizes Node.js, Inquierer and PostgreSQL.'
        },
        {
            name: 'Truck-A-Licious',
            url: '',
            gitHub: 'https://github.com/lwebert/Project2-Group3',
            projClass: 'truck-a-licious',
            description: 'We created an application that will assist food truck owners in connecting to their customers. Our application allows a food truck owner to create an account associated with their business. Then, they will be able to display the location and times of business to a public database available to all users. Both regular users and business owners will be able to view an upcoming schedule of local available food trucks in order to optimally plan locations and times.'
        },
        {
            name: 'CICD',
            url: '',
            gitHub: 'https://github.com/tlesner/Challenge20-CICD',
            projClass: 'cicd',
            description: 'Challenge 20 is a CI/CD utility designed to automate the testing and deployment pipeline for applications targeting Render. It integrates with version control systems to detect code changes, execute preconfigured test suites, and trigger deployments based on defined conditions. The application supports customizable build scripts, environment variable management, and webhook-triggered deployments, making it ideal for development teams seeking a robust, scriptable, and scalable deployment workflow.'
        },{
            name: 'Kanban Board',
            url: '',
            gitHub: 'https://github.com/tlesner/Challenge14-KanbanBoard',
            projClass: 'vehicle-builder',
            description: 'This full-stack PERM application functions as a visual project management tool using a Kanban board layout. It leverages JSON Web Tokens for secure user authentication, allowing users to log in and manage project tickets organized into three columns: To Do, In Progress, and Completed. Users can create new tickets, update existing ones, or remove tickets. The app is deployed via Render and built using PostgreSQL for the database, with a tech stack that includes Express.js, ReactJS, and Node.js.'
        },{
            name: 'Vehicle Builder',
            url: '',
            gitHub: 'https://github.com/tlesner/challenge8-VehicleBuilder',
            projClass: 'vehicle-builder',
            description: 'This is a command-line application that allows a user to build a vehicle and test verious scenarios, based on the users inputs. The application utilizes the inquirer package, node.js and typescript'
        },
    ]
    
    return (
        <div className='portfolio-container'>
            <div>
                <h1>
                Portfolio
                </h1>
            </div>

            <div className='projects-container'>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        gitHub={project.gitHub}
                        description={project.description}
                        projClass={project.projClass}
                     />
                ))}
            </div>
        </div>
    )
}