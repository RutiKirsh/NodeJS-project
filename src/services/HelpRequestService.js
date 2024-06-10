import BaseService from "./BaseService";

class HelpRequest extends BaseService {
    constructor(repo){
        super(repo);
    }
}
export default new HelpRequest(repo);