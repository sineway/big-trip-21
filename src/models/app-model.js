import Model from './model.js';
import PointModel from './point-model.js';
import points from '../data/points.json';
import destinations from '../data/destinations.json';
import offerGroups from '../data/offers.json';

class AppModel extends Model {
  constructor() {
    super();

    /**
     * @type {Array<Point>}
     */
    this.points = [];

    /**
     * @type {Array<Destination>}
     */
    this.destinations = [];

    /**
     * @type {Array<OfferGroup>}
     */
    this.offerGroups = [];
  }

  /**
   * @returns {Promise<void>}
   */
  async ready() {
    // TODO: Получение данных с сервера
    // @ts-ignore
    this.points = points;
    this.destinations = destinations;
    // @ts-ignore
    this.offerGroups = offerGroups;
  }

  /**
   * @returns {Array<PointModel>}
   */
  getPoints() {
    return this.points.map((point) => new PointModel(point));
  }

  /**
   * @returns {Array<Destination>}
   */
  getDestinations() {
    return structuredClone(this.destinations);
  }

  /**
   * @returns {Array<OfferGroup>}
   */
  getOfferGroups() {
    return structuredClone(this.offerGroups);
  }
}

export default AppModel;
