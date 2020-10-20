export type Task = {
  _id: string
  name: string
  description: string
  status: "inProgress" | "done"
  start: string
  finish: string
}

export type Project = {
  _id: string
  name: string
  description: string
  start: string
  finish: string
  status: "inProgress" | "done"
  tasks: [Task]
}

export type RouteTypes = {
  Project: {
    project: {
      _id: string
      name: string
      description: string
      start: string
      finish: string
      status: "inProgress" | "done"
      tasks: {
        _id: string
        name: string
        description: string
        status: "inProgress" | "done"
        start: string
        finish: string
      }
    }
  }
}
