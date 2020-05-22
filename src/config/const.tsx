import Constants from 'expo-constants';

const { manifest } = Constants;

export const api =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? 'http://'.concat(
        manifest
          .debuggerHost!.split(`:`)!
          .shift()!
          .concat(`:4000/api`),
      )
    : `api.example.com`;

export const baseUrl = process.env.NODE_ENV === 'production' ? '' : api;
