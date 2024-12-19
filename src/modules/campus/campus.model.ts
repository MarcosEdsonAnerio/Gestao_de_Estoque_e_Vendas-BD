import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Campus extends Model {
  @Column
  id_cam: number;

  @Column
  nome_cam: string;
}