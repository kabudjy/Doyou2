using Doyou2.Data;
using Doyou2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Doyou2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
            private readonly ApplicationDbContext _context;

            public UsersController(ApplicationDbContext context)
            {
                _context = context;
            }

        // GET: api/Users
        [HttpGet]
            public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetUsers()
            {
                if (_context.Users == null)
                {
                    return NotFound();
                }
                return await _context.Users.ToListAsync();
            }

        // GET: api/Users/5
        [HttpGet("{id}")]
            public async Task<ActionResult<ApplicationUser>> GetUsers(Guid id)
            {
                if (_context.Users == null)
                {
                    return NotFound();
                }
                var users = await _context.Users.FindAsync(id);

                if (users == null)
                {
                    return NotFound();
                }

                return users;
            }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
            public async Task<IActionResult> PutUsers(Guid id, ApplicationUser users)
            {
                if (id != users.Id)
                {
                    return BadRequest();
                }

                _context.Entry(users).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UsersExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
            public async Task<ActionResult<ApplicationUser>> PostUsers(ApplicationUser users)
            {
                if (_context.Users == null)
                {
                    return Problem("Entity set 'ApplicationDbContext.Users'  is null.");
                }
                _context.Users.Add(users);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetUsers", new { id = users.Id }, users);
            }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteUsers(Guid id)
            {
                if (_context.Users == null)
                {
                    return NotFound();
                }
                var users = await _context.Users.FindAsync(id);
                if (users == null)
                {
                    return NotFound();
                }

                _context.Users.Remove(users);
                await _context.SaveChangesAsync();

                return NoContent();
            }

            private bool UsersExists(Guid id)
            {
                return (_context.Users?.Any(e => e.Id == id)).GetValueOrDefault();
            }
        }
    }
