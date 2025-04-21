import'./Portfolio.css'
import Project from '../../components/Project'

export default function Portfolio() {
    const projects = [
        {
            name: 'Weather Dashboard',
            url: '',
            gitHub: 'https://github.com/tlesner/Challenge9-WeatherDashboard',
            projClass: 'weather-dashboard',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum nostrum, dicta non fugit nam earum impedit dolores voluptatibus commodi, assumenda iure! Dolore molestiae soluta tempore reiciendis! Laboriosam, iure enim?'
        },
        {
            name: 'Employee Tracker',
            url: '',
            gitHub: 'https://github.com/tlesner/Challenge10-EmployeeTracker',
            projClass: 'employee-tracker',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum nostrum, dicta non fugit nam earum impedit dolores voluptatibus commodi, assumenda iure! Dolore molestiae soluta tempore reiciendis! Laboriosam, iure enim?'
        },
        {
            name: 'Truck-A-Licious',
            url: '',
            gitHub: 'https://github.com/lwebert/Project2-Group3',
            projClass: 'truck-a-licious',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum nostrum, dicta non fugit nam earum impedit dolores voluptatibus commodi, assumenda iure! Dolore molestiae soluta tempore reiciendis! Laboriosam, iure enim?'
        },
        {
            name: 'Vehicle Builder',
            url: '',
            gitHub: 'https://github.com/tlesner/challenge8-VehicleBuilder',
            projClass: 'vehicle-builder',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum nostrum, dicta non fugit nam earum impedit dolores voluptatibus commodi, assumenda iure! Dolore molestiae soluta tempore reiciendis! Laboriosam, iure enim?'
        },{
            name: 'Vehicle Builder',
            url: '',
            gitHub: 'https://github.com/tlesner/challenge8-VehicleBuilder',
            projClass: 'vehicle-builder',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum nostrum, dicta non fugit nam earum impedit dolores voluptatibus commodi, assumenda iure! Dolore molestiae soluta tempore reiciendis! Laboriosam, iure enim?'
        },{
            name: 'Vehicle Builder',
            url: '',
            gitHub: 'https://github.com/tlesner/challenge8-VehicleBuilder',
            projClass: 'vehicle-builder',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum nostrum, dicta non fugit nam earum impedit dolores voluptatibus commodi, assumenda iure! Dolore molestiae soluta tempore reiciendis! Laboriosam, iure enim?'
        },{
            name: 'Vehicle Builder',
            url: '',
            gitHub: 'https://github.com/tlesner/challenge8-VehicleBuilder',
            projClass: 'vehicle-builder',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum nostrum, dicta non fugit nam earum impedit dolores voluptatibus commodi, assumenda iure! Dolore molestiae soluta tempore reiciendis! Laboriosam, iure enim?'
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