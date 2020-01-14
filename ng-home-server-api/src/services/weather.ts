type TGetAsyncParam = () => Promise<number>;

type TGetRandInRange = (min: number, max: number) => number;

export class Weather {
  private getRandInRange: TGetRandInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  public getTemperature: TGetAsyncParam = async () => {
    return new Promise((resolve) => {
      const tMin = -10;
      const tMax = 40;
      const t = this.getRandInRange(tMin, tMax);

      setTimeout(() => resolve(t), 500);
    });
  }

  public getHumidity: TGetAsyncParam = async () => {
    return new Promise((resolve) => {
      const hMin = 10;
      const hMax = 70;
      const h = this.getRandInRange(hMin, hMax);

      setTimeout(() => resolve(h), 500);
    });
  }

  public getPressure: TGetAsyncParam = async () => {
    return new Promise((resolve) => {
      const pMin = 700;
      const pMax = 800;
      const p = this.getRandInRange(pMin, pMax);

      setTimeout(() => resolve(p), 500);
    });
  }
}

export default new Weather();
