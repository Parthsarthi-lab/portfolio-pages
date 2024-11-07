import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-6 pt-6">
            <div className="w-48 h-48 relative rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Parth Sarthi Joshi"
                width={192}
                height={192}
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Parth Sarthi Joshi</h1>
              <p className="text-xl text-muted-foreground">CEO & Chief Executive Engineer</p>
              <p className="text-muted-foreground">VijAI Robotics Pvt Ltd | October 29, 2022 - Present</p>
              <p className="text-muted-foreground">Headquarters: Haldwani, Uttarakhand, India</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              CEO and Chief Executive Engineer at VijAI Robotics Pvt Ltd, driving innovation in robotics and AI. Proven track record in establishing and growing an AI-focused company, with expertise in machine learning, deep learning, and data science. Currently pursuing a B.Tech in Robotic Engineering with a mission to elevate education and industry through advanced AI applications. Spearheads industry-aligned training programs, empowering students and professionals with job-ready skills in data science, machine learning, and big data technologies, positioning them for success in AI-driven roles.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Professional Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">VijAI Robotics Pvt Ltd</h3>
            <p className="text-muted-foreground mb-4">CEO & Chief Executive Engineer | October 2022 - Present</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Founded and spearhead VijAI Robotics Pvt Ltd, driving strategic planning, R&D, and project execution to enhance automation and autonomous systems through cutting-edge AI and data science.</li>
              <li>Supervise and mentor a team of 10 employees and 7 PhD scholars, facilitating advanced research in artificial intelligence, computer vision, machine learning, and deep learning.</li>
              <li>Achieved an annual turnover of ₹16 lakh within the first year, showcasing robust growth and market traction.</li>
              <li>Develop and deliver industry-aligned courses in data science, machine learning, and robotics, directly impacting over 500 students and professionals.</li>
              <li>Lead the creation of practical learning pathways, offering specializations in roles such as Data Scientist, Machine Learning Engineer, and Big Data Engineer to ensure career readiness.</li>
              <li>Innovate and implement hands-on, project-based training programs, meeting industry standards and equipping learners with applicable, real-world skills.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Company Vision and Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              At VijAI Robotics, committed to pioneering research and delivering value through AI-driven solutions in robotics, NLP, and deep learning. Dedicated to workforce training, inclusive decision-making, and building world-class facilities to address AI challenges. Engages in external funding and collaborative projects to fuel sustainable innovation.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Skill Development Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Design and conduct skill-development programs in data science, machine learning, and AI, addressing key industry roles like Data Scientist and Big Data Engineer.</li>
              <li>Teach and mentor students on machine learning, deep learning, and computer vision, providing hands-on project experience that enhances employability in AI domains.</li>
              <li>Implement advanced training using big data technologies, data visualization, and cloud computing to ensure students develop industry-ready skills.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold">Bachelor of Technology (B.Tech) in Robotic Engineering (In Progress)</h3>
            <p className="text-muted-foreground">International University of Applied Sciences in Germany</p>
            <p className="text-muted-foreground">Expected Graduation: 2027</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Programming Languages:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["R", "SQL", "Java", "Python", "C++"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Machine Learning & Deep Learning:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Model deployment", "Neural networks", "Computer vision applications"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Big Data:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Hadoop ecosystem (HDFS, Spark)", "Data analytics"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Cloud Computing:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  <Badge variant="secondary">AWS for scalable infrastructure solutions</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Data Visualization:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Power BI", "Tableau"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
