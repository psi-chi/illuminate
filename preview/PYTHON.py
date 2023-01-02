import discord

client = discord.Client()


@client.event
async def on_ready():
    print(f"Logged in as {client.user}!")


@client.event
async def on_message(message):
    if message.content == "!ping":
        await message.channel.send("Pong!")


client.run("YOUR_BOT_TOKEN_HERE")
