import type { FieldConfig } from "@/types/common";
import { fieldsConfigs } from "@/universal/fieldsConfigs";
import { UniversalDatabasesIds, UniversalObjectsIds } from "@/universal/enums";

export enum IEntity {
  Credential = "credential",
  CredentialType = "credentialType",
  CredentialTypeName = "credentialTypeName",
  CredentialName = "credentialName",
  CredentialDescription = "credentialDescription",
  CredentialPassword = "credentialPassword",
}

interface IUniversalObject {
  id: UniversalObjectsIds;
  databaseId: UniversalDatabasesIds;
  description?: string;
}

export const universalObjects: IUniversalObject[] = [
  {
    id: UniversalObjectsIds.Verbs,
    databaseId: UniversalDatabasesIds.MainDatabase,
  },
  {
    id: UniversalObjectsIds.VerbsForms,
    databaseId: UniversalDatabasesIds.MainDatabase,
  },
  {
    id: UniversalObjectsIds.VerbsPronombres,
    databaseId: UniversalDatabasesIds.MainDatabase,
  },
];

export const getDatabaseIdByObjectId = (objectId: string): string => {
  const object = universalObjects.find((item) => item.id === objectId);

  if (!object) {
    throw new Error(
      `Cannot find database for universal object with id '${objectId}'`
    );
  }

  return object.databaseId;
};

export const getDrawerConfigByObjectId = (objectId: string): FieldConfig[] => {
  const config = fieldsConfigs[objectId];

  if (!config) {
    throw new Error(
      `Cannot find drawer config for universal object with id '${objectId}'`
    );
  }

  return config;
};

export const getTableConfigByObjectId = (objectId: string): FieldConfig[] => {
  const config = fieldsConfigs[objectId];

  if (!config) {
    throw new Error(
      `Cannot find table config for universal object with id '${objectId}'`
    );
  }

  return config;
};
