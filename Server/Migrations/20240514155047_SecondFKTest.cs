using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class SecondFKTest : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ListId",
                table: "Cards",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cards_ListId",
                table: "Cards",
                column: "ListId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cards_Lists_ListId",
                table: "Cards",
                column: "ListId",
                principalTable: "Lists",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cards_Lists_ListId",
                table: "Cards");

            migrationBuilder.DropIndex(
                name: "IX_Cards_ListId",
                table: "Cards");

            migrationBuilder.DropColumn(
                name: "ListId",
                table: "Cards");
        }
    }
}
