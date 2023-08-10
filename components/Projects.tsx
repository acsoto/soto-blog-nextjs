const Projects = () => {
  const projects = [
    {
      name: 'Musician and Genre Analysis Research',
      type: 'Meritorious Winner in the MCM/ICM 2021',
      description: [
        'Constructed adjacency lists describing the music influence network topology of musicians, establishing relationships between influencers and followers through weighted directed paths. Computed the music influence value for each musician using DFS recursion',
        'Combined graph networks with mathematical modeling to calculate musician similarity using cosine similarity and music feature influence using Pearson correlation coefficient',
      ],
    },
    {
      name: 'PetCharm Pet Platform & Campus Takeaway Delivery Platform',
      type: 'Backend Development',
      description: [
        'Built a database system using MySQL',
        'Developed backend APIs using Django based on the MVC model, utilizing Nginx and uwsgi reverse proxy',
        'Implemented secure login using session and cookie mechanisms, set up email verification and object storage systems',
      ],
    },
    {
      name: 'Personal Website',
      type: 'Frontend Development',
      description: ['Built personal website using React and TypeScript, enhanced with TailwindCSS'],
    },
    {
      name: 'Memo & IoT Monitor',
      type: 'iOS Development',
      description: [
        'Developed iOS apps for diary, book, movie records, and IoT device control using Swift and SwiftUI. Used HTTP to call backend APIs for real-time information and control of IoT devices',
      ],
    },
    {
      name: 'PCode Compiler',
      type: 'Java Development',
      description: [
        'Performed lexical analysis, syntax analysis, error handling, and generated Pcode code using finite automata, recursive descent, and other methods',
      ],
    },
    {
      name: 'MIPS-CPU',
      type: 'Verilog Development',
      description: [
        'Implemented a 5-stage pipeline CPU based on MIPS instruction set using Verilog',
      ],
    },
    {
      name: 'New York City Taxi Fare Analysis & Music Preference Analysis',
      type: 'Peter the Great St.Petersburg Polytechnic University Big Data & Machine Learning Project',
      description: ['Employed SVM, XGBoost, deep neural networks, and more for data analysis'],
    },
    {
      name: 'Long-term wind prediction in wind farm areas based on machine learning',
      type: 'Graduation Project',
      description: [
        'Implemented wind speed long-term forecasting using a deep neural network based on LSTM',
      ],
    },
  ]

  return (
    <>
      <div>
        {projects.map((project) => (
          <div key={project.name}>
            <h4>
              <div className="font-extrabold">{project.name}</div>
              <div className="text-gray-500">{project.type}</div>
            </h4>
            <ul>
              {project.description.map((description) => (
                <li key={description} className="text-sm">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
