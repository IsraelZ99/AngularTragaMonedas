// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export class environmentClass {

  public probabiltyWin(): number {
    return Math.floor(Math.random() * 15 + 10);
  }

  public generateNumberWin(): number {
    return Math.floor(Math.random() * 10 + 1);
  }

}

export const environment = {
  production: false,
  hostURL: 'http://localhost',
  username: 'Israel en local',
  balls: [0, 0, 0, 0],
  token: '12345678',
  port: 8080,
  envName: 'local'
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
