using Doyou2.Data;
using Doyou2.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Doyou2.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
            private readonly ApplicationDbContext _context;

            public UsersController(ApplicationDbContext context)
            {
                _context = context;
            }

            [HttpGet("token")]
            [AllowAnonymous]
            public async Task<ActionResult<string>> GetLoginToken()
            {
                return await HttpContext.GetTokenAsync("access_token");
            }

            [HttpGet]
            public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetUser()
            {
                if (_context.Users == null)
                {
                    return NotFound();
                }
                return await _context.Users.ToListAsync();
            }

        // GET: api/Users/5
            [HttpGet("{id}")]
            public async Task<ActionResult<ApplicationUser>> GetUser(string id)
            {
                if (_context.Users == null)
                {
                    return NotFound();
                }
                var user = await _context.Users.FindAsync(id);

                if (user == null)
                {
                    return NotFound();
                }

                return user;
            }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
            [HttpPut("{id}")]
            public async Task<IActionResult> PutUser(string id, ApplicationUser user)
            {
                if (id != user.Id)
                {
                    return BadRequest();
                }

                _context.Entry(user).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }

                return NoContent();
            }

            private bool UserExists(string id)
            {
                return (_context.Users?.Any(e => e.Id == id)).GetValueOrDefault();
            }
        }
}
