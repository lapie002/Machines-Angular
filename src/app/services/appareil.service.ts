export class AppareilService {

  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: ''
    },
    {
      id: 2,
      name: 'Frigo',
      status: ''
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: ''
    }
  ];

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(i: number): void {
  this.appareils[i].status = 'allumé';
 }

  switchOffOne(i: number){
    this.appareils[i].status = 'éteint';
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

}
