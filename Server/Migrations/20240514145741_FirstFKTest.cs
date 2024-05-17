using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class FirstFKTest : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BoardId",
                table: "Lists",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Lists_BoardId",
                table: "Lists",
                column: "BoardId");

            migrationBuilder.AddForeignKey(
                name: "FK_Lists_Boards_BoardId",
                table: "Lists",
                column: "BoardId",
                principalTable: "Boards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Lists_Boards_BoardId",
                table: "Lists");

            migrationBuilder.DropIndex(
                name: "IX_Lists_BoardId",
                table: "Lists");

            migrationBuilder.DropColumn(
                name: "BoardId",
                table: "Lists");
        }
    }
}
