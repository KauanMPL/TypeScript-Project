using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2d919bd0-abcb-45e5-8600-0b67941a57be");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "711a2f56-bc55-4c4c-ae65-ad486a31c0da");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "47a9388f-ade1-46a6-9a17-9e961918da22", "477c9873-9613-4681-afc7-d1e354fd6891", "Admin", "ADMIN" },
                    { "67337942-4704-4d1e-b52c-187b5b69fb5d", "b4cc45a6-f078-43ae-8615-6b9c5f9b7f6e", "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "47a9388f-ade1-46a6-9a17-9e961918da22");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "67337942-4704-4d1e-b52c-187b5b69fb5d");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2d919bd0-abcb-45e5-8600-0b67941a57be", "83f738d9-80c6-4ec0-8b73-26561617aa8f", "Admin", "ADMIN" },
                    { "711a2f56-bc55-4c4c-ae65-ad486a31c0da", "e726e7c3-a920-4de8-aab8-9374b3a31511", "User", "USER" }
                });
        }
    }
}
