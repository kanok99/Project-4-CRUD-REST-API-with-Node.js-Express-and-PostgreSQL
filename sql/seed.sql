INSERT INTO users (name, email) VALUES
('Grace Hopper','grace@navy.mil') ON CONFLICT DO NOTHING,
('Alan Turing', 'alan@bletchley.uk') ON CONFLICT DO NOTHING;
