import { LoggerPort } from "@techmely/types";
import type { Document, Model } from "mongoose";
import { AggregateRoot } from "~/core/domain/entitys/aggregate.base";
import { Mapper } from "~/core/domain/repositories/mapper.port";
import {
    Paginated,
    PaginatedQueryParams,
    RepositoryPort,
} from "~/core/domain/repositories/repository.port";
import { EmitterPort } from "../emitter/emitter.port";

export abstract class MongoDBRepositoryBase<
  Aggregate extends AggregateRoot<unknown>,
  DbModel extends Document = Document
> implements RepositoryPort<Aggregate>
{
  protected abstract model: Model<DbModel>;
  protected constructor(
    protected readonly mapper: Mapper<Aggregate, DbModel>,
    protected readonly emitter?: EmitterPort, // để emit event
    protected readonly logger?: LoggerPort // để log
  ) {}

  async findById(id: string): Promise<Aggregate> {
    const doc = await this.model.findById(id).exec();
    if (!doc) {
      throw new Error(`Entity with id ${id} not found`);
    }
    return this.mapper.toDomain(doc);
  }

  async findByKey(key: string): Promise<Aggregate> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<Aggregate[]> {
    const docs = await this.model.find().exec();
    return docs.map((doc) => this.mapper.toDomain(doc));
  }

  async findAllPaginated(
    params: PaginatedQueryParams
  ): Promise<Paginated<Aggregate>> {
    throw new Error("Method not implemented.");
  }

  async findAllByIds(ids: string[]): Promise<Aggregate[]> {
    const docs = await this.model.find({ _id: { $in: ids } }).exec();
    return docs.map((doc) => this.mapper.toDomain(doc));
  }

  async existsById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async count(): Promise<bigint | number> {
    throw new Error("Method not implemented.");
  }

  async insert(entity: Aggregate): Promise<void> {
    const doc = this.mapper.toPersistence(entity);
    await this.model.create(doc);
  }

  async insertMany(entities: Aggregate[]): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async insertBulk(entity: Aggregate): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async insertBulkMany(entities: Aggregate[]): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async update(entity: Aggregate): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async updateBulk(entity: Aggregate): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async updateMany(entities: Aggregate[]): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async updateBulkMany(entities: Aggregate[]): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async delete(entity: Aggregate): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async deleteById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async deleteAllByIds(ids: string[]): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async deleteBulk(entity: Aggregate): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async transaction<T>(handler: () => Promise<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
