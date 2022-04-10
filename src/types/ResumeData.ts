export default interface ResumeData {
  basic_info?: {
    description_header: string,
    description: string,
    section_name: {
      about: string,
      projects: string,
      skills: string,
      experience: string
    }
  },
  projects?: {
    title: string,
    startDate: string,
    description: string,
    overview: string,
    images: string[],
    url: string,
    technologies: {
      class: string,
      name: string
    }[]
  }[]
}
