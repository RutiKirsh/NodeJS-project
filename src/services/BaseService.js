class BaseService{
    constructor(repo){
        this.repo = repo;
    }
    async getAll(){
        return await this.repo.getAll();
    }
    async getById(id){
        return await this.repo.getById(id);
    }
    async add(data){
        return await this.repo.add(data);
    }
    async update(id, data){
        return await this.repo.update(id, data);
    }
    async delete(id){
        return await this.repo.delete(id);
    }
}
export default BaseService;