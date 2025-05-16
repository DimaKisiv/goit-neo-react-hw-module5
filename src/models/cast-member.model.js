export class CastMember {
  constructor({
    adult,
    gender,
    id,
    known_for_department,
    name,
    original_name,
    popularity,
    profile_path,
    cast_id,
    character,
    credit_id,
    order,
  }) {
    this.adult = adult;
    this.gender = gender;
    this.id = id;
    this.knownForDepartment = known_for_department;
    this.name = name;
    this.originalName = original_name;
    this.popularity = popularity;
    this.profilePath = profile_path;
    this.castId = cast_id;
    this.character = character;
    this.creditId = credit_id;
    this.order = order;
  }
}
