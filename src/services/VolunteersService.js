import BaseService from "./BaseService.js";
import repo from "../repositories/VolunteersRepo.js";

class VolunteersService extends BaseService {
    constructor(repo){
        super(repo);
    }
}
export default new VolunteersService(repo);