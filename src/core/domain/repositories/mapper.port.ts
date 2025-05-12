import { Entity } from "../entitys/entity.base";
export interface Mapper<DomainEntity extends Entity<unknown>, DbRecord, Response = unknown> {
  toPersistence(entity: DomainEntity): DbRecord;// chuyển entity sang db
  toDomain(record: DbRecord): DomainEntity;// chuyển dữ liệu trong db sang entity
  toResponse(entity: DomainEntity): Response;// chuyển entity sang response -> trả ra ở api
}
