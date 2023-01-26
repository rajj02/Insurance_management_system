using Microsoft.EntityFrameworkCore.Migrations;

namespace PolicyService.Migrations
{
    public partial class updated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AgeLimit",
                table: "policy",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "policy",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PolicyCover",
                table: "policy",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AgeLimit",
                table: "policy");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "policy");

            migrationBuilder.DropColumn(
                name: "PolicyCover",
                table: "policy");
        }
    }
}
