import { Entity, schema, Query } from '@rest-hooks/endpoint';

class BuildTypeDescription extends Entity {
  pk() {
    return this.id;
  }
}

export class ProjectWithBuildTypesDescription extends Entity {
  pk() {
    return this.id;
  }

  static schema = {
    buildTypes: { buildType: [BuildTypeDescription] },
  };
}

export const ProjectSchema = { project: [ProjectWithBuildTypesDescription] };

export const ProjectQuery = {
  project: new schema.All(ProjectWithBuildTypesDescription),
};
export const ProjectQuerySorted = new Query(
  new schema.All(ProjectWithBuildTypesDescription),
  entries => {
    return [...entries].sort((a, b) => a.internalId - b.internalId);
  },
);

class BuildTypeDescriptionSimpleMerge extends Entity {
  pk() {
    return this.id;
  }

  static merge(existing, incoming) {
    return incoming;
  }
}

export class ProjectWithBuildTypesDescriptionSimpleMerge extends Entity {
  pk() {
    return this.id;
  }

  static schema = {
    buildTypes: { buildType: [BuildTypeDescriptionSimpleMerge] },
  };

  static merge(existing, incoming) {
    return incoming;
  }
}

export const ProjectSchemaSimpleMerge = {
  project: [ProjectWithBuildTypesDescriptionSimpleMerge],
};
