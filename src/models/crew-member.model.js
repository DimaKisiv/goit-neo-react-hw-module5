export class CrewMember {
  constructor({
    adult,
    gender,
    id,
    known_for_department,
    name,
    original_name,
    popularity,
    profile_path,
    credit_id,
    department,
    job,
  }) {
    this.adult = adult;
    this.gender = gender;
    this.id = id;
    this.knownForDepartment = known_for_department;
    this.name = name;
    this.originalName = original_name;
    this.popularity = popularity;
    this.profilePath = profile_path;
    this.creditId = credit_id;
    this.department = department;
    this.job = job;
  }
}
