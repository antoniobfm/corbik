import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class UsersConnectionToUsersTokens1665363909427 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'users_tokens',
			new TableColumn({
				name: 'user_id',
				type: 'uuid',
			}),
		);

		await queryRunner.createForeignKey(
			'users_tokens',
			new TableForeignKey({
				name: 'TokensUsers',
				columnNames: ['user_id'],
				referencedTableName: 'users',
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('users_tokens', 'TokensUsers');

		await queryRunner.dropColumn('users_tokens', 'user_id');
	}
}
