import { CastMember } from "./cast-member.model";
import { CrewMember } from "./crew-member.model";

export class MovieCredits {
  constructor({ id, cast = [], crew = [] }) {
    this.id = id;
    this.cast = cast.map((member) => new CastMember(member));
    this.crew = crew.map((member) => new CrewMember(member));
  }
}
